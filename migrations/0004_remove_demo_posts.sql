-- Retire the template's fictional testimonials; keep the board-use instructions.
delete from forum_threads where user_id='seed' and author_name in ('Mara K.','Jonah','Priya');
